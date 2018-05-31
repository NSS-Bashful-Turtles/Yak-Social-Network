import React, { Component } from 'react'
import { Section, Button } from 'bloomer'


class OtherProfileButtons extends Component {


    render() {
        return (
            <Section>
                <Button disabled="true">Follow</Button>
                <Button disabled="true">Add Friend</Button>
            </Section>
        )
    }
}

export default OtherProfileButtons
