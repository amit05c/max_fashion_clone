import React from 'react'
import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'

export function ToastStatusExample() {
    const toast = useToast()
    const statuses = ['success']
  
    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }