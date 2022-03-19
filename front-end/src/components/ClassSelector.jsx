import { Fragment, useState } from 'react'
import { Combobox, Transition  } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

  
  function SelectClass({ classes }) {
    const [selected, setSelected] = useState(classes[0])
    const [query, setQuery] = useState('')
  
    const filteredClasses =
      query === ''
        ? classes
        : classes.filter((c) =>
        c.name.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')) ||
        c.classCode.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  
    return (
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative w-full mt-1 z-[2] ">
            <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
              <Combobox.Input
                className="w-full rounded-lg border-none focus:ring-0 py-4 pl-6 pr-10 leading-5 text-gray- focus:outline-none"
                displayValue={(c) => `${c.classCode} ${c.name}`}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredClasses.length === 0 ? (
                  <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                    filteredClasses.map((c) => (
                    <Combobox.Option
                      key={c.classCode}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active ? 'text-white bg-teal-600' : 'text-gray-900'
                        }`
                      }
                      value={c}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {c.classCode} {c.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
    )
  }

  export default SelectClass;