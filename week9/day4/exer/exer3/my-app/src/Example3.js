import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
    render() {
        return (
            <div>
                <h2>Experiences</h2>
                {data.Experiences.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.companyName}</h3>
                        <img src={exp.logo} alt={`${exp.companyName} logo`} width="100" />
                        <a href={exp.url}>Company Website</a>
                        {exp.roles.map((role, idx) => (
                            <div key={idx}>
                                <h4>{role.title}</h4>
                                <p>{role.description}</p>
                                <p>{role.startDate} - {role.endDate}</p>
                                <p>{role.location}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;
