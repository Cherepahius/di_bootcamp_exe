import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/selectors';

const CategorySelector = ({ onChange }) => {
    const categories = useSelector(selectCategories);

    return (
        <select onChange={e => onChange(e.target.value)}>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;