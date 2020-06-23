import React from 'react'
import { useForm } from 'react-hook-form'

import { FormControl, Input, Button, Textarea, Box } from '@chakra-ui/core'

const Form = () => {
  const { register, handleSubmit, formState, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <Box maxW={['300px', null, null, '480px']} mx='auto' mt={16} pb={32}>
      <FormControl
        as='form'
        bg='white'
        rounded='lg'
        p={6}
        target='_blank'
        action='https://formsubmit.co/info@genesisdistribution.co.za'
        method='POST'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={errors.name}>
          <Input
            type='text'
            placeholder='Name'
            name='Name'
            ref={register({ required: true, max: 15, min: 3, maxLength: 80 })}
            _placeholder={{ color: 'gray.600' }}
            border='1px'
            borderColor='gray.100'
            borderStyle='solid'
            mb={3}
          />
          <Input
            type='text'
            placeholder='Email'
            name='Email'
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            _placeholder={{ color: 'gray.600' }}
            border='1px'
            borderColor='gray.100'
            borderStyle='solid'
            mb={3}
          />
          <Textarea
            name='Message'
            placeholder='Message'
            ref={register({ required: true })}
            _placeholder={{ color: 'gray.600' }}
            border='1px'
            borderColor='gray.100'
            borderStyle='solid'
            mb={3}
          />
        </FormControl>

        <Button
          w='100%'
          bg='purple.500'
          color='gray.50'
          isLoading={formState.isSubmitting}
          type='submit'
        >
          Send Message
        </Button>
      </FormControl>
    </Box>
  )
}

export default Form
