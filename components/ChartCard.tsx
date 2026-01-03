
import React from 'react';
import { messageVolumeData, topWordsData } from '../constants';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
    onNext: () => void;
}

const ChartCard: React.FC<ChartCardProps> = ({ onNext }) => {
    return (
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-primary shadow-2xl rounded-2xl p-6 md:p-8 w-full"
        >
            <h2 className="text-3xl md:text-4xl font-caveat font-bold text-accent text-center mb-8">Nossa História em Dados</h2>
            
            <div className="mb-12">
                <h3 className="text-xl font-poppins font-semibold text-center mb-4">Volume de Mensagens (2025)</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={messageVolumeData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis dataKey="name" stroke="#f0e8e8" />
                            <YAxis stroke="#f0e8e8" />
                            <Tooltip contentStyle={{ backgroundColor: '#16213e', border: '1px solid #e94560' }} />
                            <Bar dataKey="volume" name="Intensidade" fill="#e94560" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-poppins font-semibold text-center mb-4">Top 10 Palavras Mais Faladas</h3>
                 <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                         <BarChart layout="vertical" data={topWordsData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                             <XAxis type="number" stroke="#f0e8e8" />
                             <YAxis type="category" dataKey="name" width={100} stroke="#f0e8e8" />
                             <Tooltip contentStyle={{ backgroundColor: '#16213e', border: '1px solid #e94560' }} />
                             <Bar dataKey="count" name="Frequência" fill="#8884d8" />
                         </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

             <div className="flex justify-center mt-8">
                <button onClick={onNext} className="bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 text-lg">
                    Ver a Grande Final!
                </button>
            </div>
        </motion.div>
    );
};

export default ChartCard;
