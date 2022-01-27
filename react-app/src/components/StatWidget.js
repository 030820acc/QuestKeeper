import React from 'react';
import { useSelector } from 'react-redux';

const statModFinder = (num) => {
    if(num === 1) {
        return '-5'
    } else if (num === 2 || num === 3) {
        return '-4'
    } else if (num === 4 || num === 5) {
        return '-3'
    } else if (num === 6 || num === 7) {
        return '-2'
    } else if (num === 8 || num === 9) {
        return '-1'
    } else if (num === 10 || num === 11) {
        return '+0'
    } else if (num === 12 || num === 13) {
        return '+1'
    } else if (num === 14 || num === 15) {
        return '+2'
    } else if (num === 16 || num === 17) {
        return '+3'
    } else if (num === 18 || num === 19) {
        return '+4'
    } else if (num === 20 || num === 21) {
        return '+5'
    }
}

const StatWidget = ({id}) => {
    const characters = useSelector((state) => state.characters)
    const char = characters[id]



    return (
        <div className='card'>
            <h2 className="name">Strengh: {char?.strength} {statModFinder(char?.strength)}</h2>
            <h2 className="name">Dexterity: {char?.dexterity} {statModFinder(char?.dexterity)}</h2>
            <h2 className="name">Constitution: {char?.constitution} {statModFinder(char?.constitution)}</h2>
            <h2 className="name">Intelligence: {char?.intelligence} {statModFinder(char?.intelligence)}</h2>
            <h2 className="name">Wisdom: {char?.wisdom} {statModFinder(char?.wisdom)}</h2>
            <h2 className="name">Charisma: {char?.charisma} {statModFinder(char?.charisma)}</h2>
        </div>
    )
};

export default StatWidget;