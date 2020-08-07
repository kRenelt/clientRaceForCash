import React, { useState, useEffect } from 'react';
import { Horse } from '../../models/Horse';
import * as horseRemote from '../../remotes/horse.remote';

const testHorses : Horse[] = [{
    id: 1,
    name: 'steve',
    birthdate: '12-12-12-12-12-12',
    breedId: 'horse',
    health: 22,
    speed: 22,
    wins: 22,
    loses: 22,
    races: 22,
    stamina: 22,
    amountSpentOn: 2
}]

export const StableComponent: React.FC = () => {

    const [allHorses, setAllHorses] = useState<Horse[]>([]);

    useEffect(() => {
        loadHorses();
    }, []);

    const loadHorses = () => {
        console.log('loadHorses');
        horseRemote.getAllHorses().then(horses => {
            setAllHorses(horses);
        });
    }

    return(
        <div className='stable-main'>
            Stables
            {allHorses.map(h => {
                return (
                    <div className='mainHorseContainer'>
                        <div className='horseName'>{h.name}</div>
                        <div className='birthdate'>{h.birthdate}</div>
                    </div>
                )
            })}
        </div>
    );
}