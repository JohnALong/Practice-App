import React, { Component } from 'react'
import PracticeCard from './practice/PracticeCard'

class Practice extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>That's My App!!!<br />
                        <small>I built this!</small>
                    </h2>
                    <address>
                        Right here in Nashville!!!
                </address>
                </div>
                <div>
                    <PracticeCard />
                    <PracticeCard />
                    <PracticeCard />
                </div>
            </div>
        );
    }
}

export default Practice