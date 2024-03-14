import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Form, useSubmit } from '@remix-run/react';
import { Fragment } from 'react';
import { RadioOption } from './RadioOption';

export function SortOrder() {
    const submit = useSubmit();
    
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex w-full items-center justify-center gap-1.5 rounded-md bg-white px-4 py-2 font-semibold text-indigo-600 hover:text-indigo-500 border border-solid border-indigo-200">
                Sortér efter
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
            </Menu.Button>
  
            <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white border border-solid border-indigo-200 focus:outline-none overflow-hidden">
                    <Form onChange={e => submit(e.currentTarget)}>
                        <fieldset>
                            <Menu.Item>
                                {({ close }) => <RadioOption label="Stigende" onClick={close} value="asc"/>}
                            </Menu.Item>

                            <Menu.Item>
                                {({ close }) => <RadioOption label="Faldende" onClick={close} value="desc"/>}
                            </Menu.Item>
                        </fieldset>
                    </Form>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

