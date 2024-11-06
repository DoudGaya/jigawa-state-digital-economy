"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Moon, Sun, Menu } from "lucide-react"
import { endpoints } from '@/lib/exports'

export default function Documentations() {
  const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0].name)
  const [copiedEndpoint, setCopiedEndpoint] = useState(false)
  const [copiedRequest, setCopiedRequest] = useState(false)
  const [copiedResponse, setCopiedResponse] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex flex-col px-6 space-y-4 ${darkMode ? 'dark' : ''}`}>
      {/* <aside className={`
        fixed inset-y-0 left-0 w-64 inset-0 bg-gray-100 dark:bg-gray-900 overflow-y-auto transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <nav className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">API Endpoints</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
          <ul className="space-y-2">
            {endpoints.map((endpoint) => (
              <li key={endpoint.name}>
                <button
                  className={`w-full text-left p-2 rounded ${
                    activeEndpoint === endpoint.name
                      ? 'bg-green-500 text-white'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setActiveEndpoint(endpoint.name)
                    setSidebarOpen(false)
                  }}
                >
                  {endpoint.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside> */}
    <h1 className="text-2xl md:text-start font-bold">JigawaOneAPI Documentation</h1>
    <p>
        All developers are required to use an API key to access the JigawaOneAPI. To obtain an API key, please contact the Jigawa State Ministry of ICT and Digital Economy.
        Records are stored in a database and can be accessed using the API which can only be accessed by authorized users. Ministries and agencies can access the API to retrieve information about indigenes of Jigawa State.
    </p>
      <div className="flex-1 flex flex-col text-wrap w-full flex-wrap">
        <div className=" flex flex-col space-y-6 justify-center ">
            <h3 className=' text-2xl font-semibold font-poppins'>API Endpoints</h3>
        <ul className=" flex flex-wrap gap-4">
            {endpoints.map((endpoint) => (
              <li key={endpoint.name}>
                <button
                  className={`w-full text-left p-2 text-xs bg-gray-200 rounded ${
                    activeEndpoint === endpoint.name
                      ? 'bg-green-500 text-white'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setActiveEndpoint(endpoint.name)
                    setSidebarOpen(false)
                  }}
                >
                  {endpoint.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <main className=" flex w-full py-6 text-wrap bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <ScrollArea className="h-full w-full text-wrap">
            {endpoints.map((endpoint) => (
              activeEndpoint === endpoint.name && (
                <div key={endpoint.name} className="space-y-8">
                  <header className="space-y-4">
                    <h2 className="text-2xl font-bold">{endpoint.name} Endpoint</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">{endpoint.description}</p>
                  </header>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Endpoint</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                      <code className="text-sm font-mono">POST https://api.jg.gov.ng{endpoint.path}</code>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-2"
                        onClick={() => copyToClipboard(`POST https://api.jg.gov.ng${endpoint.path}`, setCopiedEndpoint)}
                      >
                        {copiedEndpoint ? 'Copied!' : 'Copy'}
                        <Copy className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Required Permission</h3>
                    <p>{endpoint.permission}</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Request Headers</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm font-mono">apiKey: Your API key (required)</code>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Request Body</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                      {Object.entries(endpoint.requestBody).map(([key, value]) => (
                        <p key={key}><code className="text-sm font-mono">{key}</code> ({value}): {key === 'jigawa_id' ? 'The ID of the indigene you want to retrieve information about.' : 'Array of columns to retrieve.'}</p>
                      ))}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For testing purposes, use one of the following IDs: JG-01-02-501, JG-01-02-502, JG-01-02-503, or JG-01-02-505
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Response</h3>
                    <p><strong>Response Type:</strong> application/json</p>
                    <div className="space-y-2">
                      <p><strong>Status:</strong> Indicates whether the request was successful or not.</p>
                      <ul className="list-disc list-inside pl-4">
                        <li><code className="text-sm font-mono">success</code>: The request was successfully processed.</li>
                        <li><code className="text-sm font-mono">failed</code>: The request failed due to invalid parameters or lack of permissions.</li>
                      </ul>
                    </div>
                    <p><strong>Message:</strong> A message providing more details about the status of the request.</p>
                    <p><strong>Result:</strong> Contains the indigene's information if the request was successful. If the request failed, this will be false.</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Result Object</h3>
                    <p>Detailed information about the indigene, including fields like:</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <pre className="text-sm font-mono">
                        {endpoint.responseFields.join('\n')}
                      </pre>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Examples</h3>
                    <Tabs defaultValue="request">
                      <TabsList>
                        <TabsTrigger value="request">Request</TabsTrigger>
                        <TabsTrigger value="success">Success Response</TabsTrigger>
                        <TabsTrigger value="failed">Failed Response</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request" className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono">
                          {JSON.stringify(endpoint.requestBody, null, 2)}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute  top-2 right-2"
                          onClick={() => copyToClipboard(JSON.stringify(endpoint.requestBody, null, 2), setCopiedRequest)}
                        >
                          {copiedRequest ? 'Copied!' : 'Copy'}
                          <Copy className="ml-2 h-4 w-4" />
                        </Button>
                      </TabsContent>
                      <TabsContent value="success" className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                          {JSON.stringify(endpoint.exampleResponse, null, 2)}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(JSON.stringify(endpoint.exampleResponse, null, 2), setCopiedResponse)}
                        >
                          {copiedResponse ? 'Copied!' : 'Copy'}
                          <Copy className="ml-2 h-4 w-4" />
                        </Button>
                      </TabsContent>
                      <TabsContent value="failed" className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono">
                          {JSON.stringify({
                            status: "failed",
                            message: "Permission denied or invalid API key",
                            result: false
                          }, null, 2)}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(
                              JSON.stringify({
                                status: "failed",
                                message: "Permission denied or invalid API key",
                                result: false
                              }, null, 2),
                              setCopiedResponse
                            )
                          }
                        >
                          {copiedResponse ? 'Copied!' : 'Copy'}
                          <Copy className="ml-2 h-4 w-4" />
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </section>
                </div>
              )
            ))}
          </ScrollArea>
        </main>
        <div className=" flex flex-col space-y-6 justify-center ">
            <h3 className=' text-2xl font-semibold font-poppins'>API Endpoints</h3>
            <ul className=" flex flex-wrap gap-4">
            {endpoints.map((endpoint) => (
            <li key={endpoint.name}>
                <button
                className={`w-full text-left p-2 text-xs bg-gray-200 rounded ${
                    activeEndpoint === endpoint.name
                    ? 'bg-green-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                    setActiveEndpoint(endpoint.name)
                    setSidebarOpen(false)
                }}
                >
                {endpoint.name}
                </button>
            </li>
            ))}
            </ul>
        </div>

      </div>
    </div>
  )
}
