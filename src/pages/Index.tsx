import React from "react";
import PageTitle from "@/components/PageTitle";
import CountryCard from "@/components/CountryCard";

const countriesData = [
  {
    rank: 1,
    name: "США",
    flag: "🇺🇸",
    description: "Сохраняет свое лидерство благодаря передовым военным технологиям, экономическому влиянию и глобальному политическому присутствию.",
    militaryPower: "Крупнейший в мире военный бюджет, передовые технологии",
    economicStrength: "Ведущая мировая экономика с развитым технологическим сектором",
    globalInfluence: "Высокое дипломатическое влияние через международные институты",
  },
  {
    rank: 2,
    name: "Россия",
    flag: "🇷🇺",
    description: "Обладает значительным ядерным арсеналом, модернизированными вооруженными силами и стратегическими ресурсами.",
    militaryPower: "Второй в мире ядерный арсенал, модернизированная армия",
    economicStrength: "Богатые природные ресурсы, энергетический сектор",
    globalInfluence: "Сильное влияние в постсоветском пространстве и на Ближнем Востоке",
  },
  {
    rank: 3,
    name: "Китай",
    flag: "🇨🇳",
    description: "Быстро растущая военная мощь, крупнейшая экономика и увеличивающееся глобальное влияние.",
    militaryPower: "Крупнейшая действующая армия, модернизация флота",
    economicStrength: "Вторая по величине экономика, производственный центр",
    globalInfluence: "Растущее влияние через инициативу 'Пояс и путь'",
  },
  {
    rank: 4,
    name: "Индия",
    flag: "🇮🇳",
    description: "Развивающаяся военная сила с ядерным оружием, растущей экономикой и демографическим потенциалом.",
    militaryPower: "Третья по величине армия, ядерный статус",
    economicStrength: "Быстрорастущая экономика, технологический сектор",
    globalInfluence: "Растущее влияние в Южной Азии и международных организациях",
  },
  {
    rank: 5,
    name: "Великобритания",
    flag: "🇬🇧",
    description: "Модернизированные вооруженные силы, сильная экономика и значительное дипломатическое влияние.",
    militaryPower: "Современные вооруженные силы, ядерное оружие",
    economicStrength: "Сильный финансовый сектор, развитая экономика",
    globalInfluence: "Постоянный член Совбеза ООН, влиятельная дипломатия",
  },
  {
    rank: 6,
    name: "Южная Корея",
    flag: "🇰🇷",
    description: "Технологически продвинутые вооруженные силы, инновационная экономика и растущее региональное влияние.",
    militaryPower: "Высокотехнологичные вооруженные силы, современные вооружения",
    economicStrength: "Инновационная экономика, технологические гиганты",
    globalInfluence: "Культурное и экономическое влияние в Азии",
  },
  {
    rank: 7,
    name: "Пакистан",
    flag: "🇵🇰",
    description: "Ядерная держава с большой армией и стратегическим расположением в Южной Азии.",
    militaryPower: "Ядерный арсенал, крупные сухопутные силы",
    economicStrength: "Развивающаяся экономика, сельское хозяйство",
    globalInfluence: "Стратегический партнер Китая, влияние в исламском мире",
  },
  {
    rank: 8,
    name: "Франция",
    flag: "🇫🇷",
    description: "Ядерная держава с проекционной силой, развитой оборонной промышленностью и глобальным присутствием.",
    militaryPower: "Ядерное оружие, экспедиционные силы",
    economicStrength: "Развитая экономика, аэрокосмическая промышленность",
    globalInfluence: "Постоянный член Совбеза ООН, влияние в Африке",
  },
  {
    rank: 9,
    name: "Япония",
    flag: "🇯🇵",
    description: "Технологически передовые силы самообороны, третья по величине экономика и сильное региональное влияние.",
    militaryPower: "Современные силы самообороны, технологические преимущества",
    economicStrength: "Третья по величине экономика, технологические инновации",
    globalInfluence: "Экономическое влияние в Азии, союз с США",
  },
  {
    rank: 10,
    name: "Бразилия",
    flag: "🇧🇷",
    description: "Крупнейшие вооруженные силы в Латинской Америке, растущая экономика и региональное лидерство.",
    militaryPower: "Крупнейшие вооруженные силы в Латинской Америке",
    economicStrength: "Крупнейшая экономика Латинской Америки, природные ресурсы",
    globalInfluence: "Региональный лидер, участник БРИКС",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 mx-auto">
        <PageTitle 
          title="Топ 10 самых сильных стран мира 2025 года" 
          subtitle="Рейтинг военной и экономической мощи на 0.4 апреля 2025 года"
        />

        <p className="text-center mb-8 max-w-2xl mx-auto">
          Данный рейтинг отражает военную мощь, экономическое влияние и геополитический статус ведущих мировых держав на начало апреля 2025 года.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {countriesData.map((country) => (
            <div className="animate-fade-in" key={country.rank} style={{ animationDelay: `${country.rank * 0.1}s` }}>
              <CountryCard
                rank={country.rank}
                name={country.name}
                description={country.description}
                militaryPower={country.militaryPower}
                economicStrength={country.economicStrength}
                globalInfluence={country.globalInfluence}
                flag={country.flag}
              />
            </div>
          ))}
        </div>

        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>Данные актуальны на 0.4 апреля 2025 года. Рейтинг учитывает военную мощь, экономическое влияние и геополитический статус.</p>
          <p className="mt-2">© 2025 Глобальный аналитический центр</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
