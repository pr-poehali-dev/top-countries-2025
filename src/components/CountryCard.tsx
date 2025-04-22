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
    if (rank === 1) return "bg-rank-1";
    if (rank === 2) return "bg-rank-2";
    if (rank === 3) return "bg-rank-3";
    return "bg-rank-default";
  };

  return (
    <Card className="country-card" style={{ animationDelay: `${rank * 0.1}s` }}>
      <div className={`rank-badge ${getRankColor(rank)}`}>
        {rank}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold">{flag}</div>
          <CardTitle>{name}</CardTitle>
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
