import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Landmark, Swords } from "lucide-react";

interface CountryProps {
  rank: number;
  name: string;
  description: string;
  militaryPower: string;
  economicStrength: string;
  globalInfluence: string;
  flag: string;
}

const CountryCard: React.FC<CountryProps> = ({
  rank,
  name,
  description,
  militaryPower,
  economicStrength,
  globalInfluence,
  flag,
}) => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-amber-500 text-black";
    if (rank === 2) return "bg-gray-300 text-black";
    if (rank === 3) return "bg-amber-700 text-white";
    return "bg-slate-700 text-white";
  };

  return (
    <Card className="country-card h-full hover:shadow-lg transition-shadow duration-300">
      <div className={`rank-badge absolute -top-3 -left-3 rounded-full w-10 h-10 flex items-center justify-center font-bold ${getRankColor(rank)} shadow-md`}>
        {rank}
      </div>
      <CardHeader className="pb-2 pt-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{flag}</div>
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Swords className="h-4 w-4 text-primary" />
            <span className="text-sm">{militaryPower}</span>
          </div>
          <div className="flex items-center gap-2">
            <Landmark className="h-4 w-4 text-primary" />
            <span className="text-sm">{economicStrength}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm">{globalInfluence}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex items-center gap-1">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Рейтинг на апрель 2025</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
