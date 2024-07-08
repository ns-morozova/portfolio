import React from 'react';
import styles from './styles.module.css';

interface Project {
    img: string;
    category: string;
}

interface ProjectListProps {
    projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className={styles.projectList}>
            {projects.map((project, index) => (
                <div key={index}>
                    <img src={project.img} alt={project.category} className={styles.projectImg} />
                </div>
            ))}
        </div>
    );
};
