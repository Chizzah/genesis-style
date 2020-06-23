import React from 'react' /* eslint-disable */
import PropTypes from 'prop-types'

import { Flex, Heading, RadioGroup, Radio, Divider } from '@chakra-ui/core'

const VariantSelector = (props) => {
  const { options } = props

  return (
    <Flex direction='column' justify='center' align='start'>
      <Heading fontSize={['lg', null, null, '2xl']}>{options.name}</Heading>
      <Divider w={12} border='2px' borderColor='gray.600' />
      <Flex my={3}>
        <RadioGroup
          isInline
          onChange={props.onChange}
          name={options.name}
          key={options.id}
        >
          {options.values.map((value) => (
            <Radio
              defaultValue={value[0]}
              textAlign='center'
              key={`${options.name}-${value}`}
              value={value}
              className='is-medium'
            >
              {`${value}`}
            </Radio>
          ))}
        </RadioGroup>
      </Flex>
    </Flex>
  )
}

export default VariantSelector

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.shape({
    values: PropTypes.array,
  }),
}
