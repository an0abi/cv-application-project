import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Preview: React.FC = () => {
    const navigate = useNavigate();

    const handleBackToEditor = () => {
        navigate('/');
    };

    return (
        <div className="justify-center items-center flex flex-col bg-gray-100 p-10 gap-10 min-h-screen">
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-gray-800 text-3xl font-bold">CV Preview</h1>
                    <Button
                        className="bg-indigo-500 text-white hover:bg-indigo-600 border-none"
                        onClick={handleBackToEditor}
                    >
                        Back to Editor
                    </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Your CV</h2>
                    <p className="text-gray-600">
                        This is where the preview of your CV will appear with all the entered data.
                    </p>
                    
                    {/* Placeholder dla danych CV */}
                    <div className="mt-6 space-y-4">
                        <div className="border-b pb-2">
                            <h3 className="font-medium text-gray-800">Informacje osobiste</h3>
                            <p className="text-gray-600 text-sm">Dane zostaną wyświetlone po wprowadzeniu</p>
                        </div>
                        
                        <div className="border-b pb-2">
                            <h3 className="font-medium text-gray-800">Wykształcenie</h3>
                            <p className="text-gray-600 text-sm">Dane zostaną wyświetlone po wprowadzeniu</p>
                        </div>
                        
                        <div className="border-b pb-2">
                            <h3 className="font-medium text-gray-800">Doświadczenie zawodowe</h3>
                            <p className="text-gray-600 text-sm">Dane zostaną wyświetlone po wprowadzeniu</p>
                        </div>
                        
                        <div className="border-b pb-2">
                            <h3 className="font-medium text-gray-800">Umiejętności</h3>
                            <p className="text-gray-600 text-sm">Dane zostaną wyświetlone po wprowadzeniu</p>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-gray-800">Języki</h3>
                            <p className="text-gray-600 text-sm">Dane zostaną wyświetlone po wprowadzeniu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;