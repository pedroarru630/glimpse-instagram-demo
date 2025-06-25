
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PerfilOutrasPessoas = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Perfil de Outras Pessoas
        </h1>
        <p className="text-gray-600 mb-6">
          Esta funcionalidade já foi implementada anteriormente.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
};

export default PerfilOutrasPessoas;
