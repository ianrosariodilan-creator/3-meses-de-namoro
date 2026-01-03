
import React from 'react';
import type { VideoData } from '../types';
import { motion } from 'framer-motion';
import { HeartIcon } from './HeartIcon';

interface VideoCardProps {
    videoData: VideoData;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoData }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="bg-primary shadow-2xl rounded-2xl p-6 md:p-8 w-full text-center"
        >
            <video
                src={videoData.path}
                controls
                autoPlay
                className="w-full rounded-lg shadow-lg mb-6 max-h-[60vh]"
            >
                Seu navegador não suporta o vídeo.
            </video>
            
            <h2 className="text-4xl md:text-5xl font-caveat text-light mb-2">{videoData.message}</h2>
            <div className="flex justify-center items-center gap-4">
                <HeartIcon className="w-8 h-8 text-accent animate-pulse" />
                <p className="text-2xl md:text-3xl font-caveat font-bold text-accent">{videoData.finalWords}</p>
                 <HeartIcon className="w-8 h-8 text-accent animate-pulse" />
            </div>
        </motion.div>
    );
};

export default VideoCard;
