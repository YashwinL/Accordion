import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Accordian() {
  const arr = ["A", "J", "E"];
  return arr.map((acc) => {
    return (
      <div key={acc} className="w-full -mb-16  pt-16">
        <div className="w-full max-w-md p-2 mx-auto space-y-1 bg-white rounded-2xl  ">
          <div className="border-l-4 border-purple-600  rounded-lg shadow-md ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-800 bg-white rounded-lg hover:bg-purple-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md truncate...">
                    <div className="space-y-1">
                      <div className="text-lg">
                        Ask family and friends to support healthy food choices
                      </div>
                      <div className="text-xs font-medium text-pink-500">
                        One time . Due 5 days ago at 5:56 PM
                      </div>
                    </div>

                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="  flex-none   px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex-row space-y-1">
                      <div className="flex-row mb-4">
                        <div className="text-xs font-bold">Details</div>
                        <textarea
                          class="border rounded-md mt-2 w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 resize-none outline-white "
                          rows="2"
                        ></textarea>
                      </div>
                      <div>
                        <div className=" text-xs flex-row space-y-1 mb-2">
                          <div className="">
                            <span className="text-xs font-bold">
                              Completed by:
                            </span>{" "}
                            Saturday, December 4, 2021 at 5:56 PM
                          </div>

                          <div>
                            {" "}
                            <span className="text-xs font-bold">
                              Frequency:
                            </span>{" "}
                            December 04, 2021 at 5:00 PM
                          </div>
                          <div>
                            {" "}
                            <span className="text-xs font-bold">
                              {" "}
                              Created:
                            </span>{" "}
                            Saturday, December 4, 2021
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className=" text-xs space-x-14">
                          <span className="text-xs font-bold">Links</span>
                          <span>Add resources to help with this goal</span>
                          <span>icon</span>
                        </div>
                      </div>
                      <div className="flex-row text-xs">
                        <div className="font-bold">Notes</div>
                        <textarea
                          class="border rounded-md mt-2 w-full bg-white border-gray-300 resize-none outline-white"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    );
  });
}
