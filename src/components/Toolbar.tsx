import React from 'react';
import styles from './styles.module.css';

interface ToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className={styles.toolbar}>
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={`${styles.toolbarItem} ${filter === selected ? styles.selected : ''}`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};
