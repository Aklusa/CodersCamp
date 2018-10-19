import React from 'react';
import { technologies, authorData } from './data';
import { 
        About, 
        TeamList, 
        Li, 
        Name,
        Description,
        Label,
        Skills,
        Skill
        } from './style';

const showAuthors = function(show){ 
    return authorData.map((element, index) => {
        return (
                <a  href={element.github} target="_blank">
                 <Li key={index} delay={index} show={show}>
                    {console.log(show)}
                    <Name>{element.name}</Name>
                    <Description>{element.description}</Description>
                 </Li>
                </a>
            );
        })
};

const showTechnology = technologies.map((element, index) => {
    return (
        <Skill key={index}>{element}</Skill>
    );
})

export default class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.rollOutList = this.rollOutList.bind(this);
    }

    render(){
        return(
            <About>
              <Label onClick={this.rollOutList}>Our Team</Label>
                    <TeamList show={this.state.show}>
                        {showAuthors(this.state.show)}
                    </TeamList>
              <Skills>
                {showTechnology}
              </Skills>
            </About>
        );
    }

    rollOutList(){
        this.setState({show: !this.state.show});
    }
}
