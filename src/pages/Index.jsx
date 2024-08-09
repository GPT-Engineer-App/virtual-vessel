import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Vocal and social" },
    { name: "Maine Coon", description: "Large and gentle" },
    { name: "Persian", description: "Long-haired and calm" },
    { name: "Bengal", description: "Energetic and playful" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
          They have been domesticated for thousands of years and are one of the most popular pets worldwide.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Characteristics of Cats</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          <li>Excellent hunters with sharp claws and teeth</li>
          <li>Flexible bodies and quick reflexes</li>
          <li>Keen senses, especially hearing and night vision</li>
          <li>Independent yet capable of forming strong bonds with humans</li>
          <li>Grooming experts, spending up to 50% of their waking hours cleaning themselves</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {catBreeds.map((breed) => (
            <Card key={breed.name}>
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{breed.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
