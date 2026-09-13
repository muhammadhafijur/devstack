import { use } from 'react';
import type { Itechnology } from '../../types/technologyType';
import TechnologiesStack from './TechnologiesStack';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    console.log(technologies)

    return (
        <div id="technologies" className="font-jakarta w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <TechnologiesStack technologies={technologies}></TechnologiesStack>
        </div>
    );
};

export default Technologies;