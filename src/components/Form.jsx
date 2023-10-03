import React from 'react';
import { useForm } from '@formspree/react';
import { Button, FormControl, FormHelperText, Heading, Input, Textarea } from '@chakra-ui/react';

const Submitting = () => { return <Heading>Submitting</Heading> }

const Succeeded = () => { return <Heading>Succeeded</Heading> }

function Form() {
    const [state, handleSubmit] = useForm('myyqnoze');

    if (state.submitting) {
        return <Submitting />;
    }
    if (state.succeeded) {
        return <Succeeded />;
    }

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <Heading mb={10}>Speak with me.</Heading>
                <FormControl>
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    <FormHelperText pb={10}>I'll never share your info.</FormHelperText>
                    <Input variant='flushed' type="email" name="email" placeholder='Your email.' mb={10} />
                    <Input variant='flushed' type="text" name="text" placeholder='Your organization.' mb={10} />
                    <Textarea variant='flushed' name="message" placeholder='Your Message.' mb={5} />
                    <Button type='submit' colorScheme='green' mb={25}>Submit</Button>
                </FormControl>
            </form>
        </>
    );
}

export default Form;