"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy } from "lucide-react" // ChevronDown

const endpoints = [
  {
    name: "All Info",
    path: "/api/v2/all-info",
    description: "Retrieves all available information about a registered indigene of Jigawa State.",
    permission: "all",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "title", "first_name", "middle_name", "surname", "full_name", "gender", "dob", "age",
      "email_address", "phone_number", "alt_phone_number", "address", "passport", "polling_unit", "ward",
      "lga", "marital_status", "occupation", "maiden_name", "nin", "bvn", "voter_card_no", "driver_license_no",
      "passport_no", "father_name", "mother_name", "spouse_name", "no_of_dependent", "nok", "nok_phone_no",
      "nok_address", "nok_polling_unit", "nok_ward", "nok_lga", "nok_relationship", "category"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        title: "Mr.",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        gender: "Male",
        dob: "1990-01-01",
        age: 34,
        email_address: "john.smith@example.com",
        phone_number: "+2347012345678",
        alt_phone_number: "+2348098765432",
        address: "123 Main Street, Dutse, Jigawa State",
        passport: "url_to_passport_image",
        polling_unit: "Dutse Ward 1",
        ward: "Dutse Ward",
        lga: "Dutse",
        marital_status: "Single",
        occupation: "Engineer",
        maiden_name: null,
        nin: "12345678901",
        bvn: "12345678901",
        voter_card_no: "987654321",
        driver_license_no: "A123456789",
        passport_no: "B123456789",
        father_name: "Mr. Doe Smith",
        mother_name: "Mrs. Jane Doe Smith",
        spouse_name: null,
        no_of_dependent: 0,
        nok: "Jane Doe",
        nok_phone_no: "+2347012345679",
        nok_address: "123 Main Street, Dutse, Jigawa State",
        nok_polling_unit: "Dutse Ward 1",
        nok_ward: "Dutse Ward",
        nok_lga: "Dutse",
        nok_relationship: "Sister",
        category: "Citizen"
      }
    }
  },
  {
    name: "Address Info",
    path: "/api/v2/address-info",
    description: "Retrieves address information about a registered indigene of Jigawa State.",
    permission: "all or address-info",
    requestBody: {
      jigawa_id: "string"
    },
    responseFields: [
      "jigawa_id", "first_name", "middle_name", "surname", "full_name", "address", "polling_unit", "ward", "lga"
    ],
    exampleResponse: {
      status: "success",
      message: "Indigene information retrieved successfully",
      result: {
        jigawa_id: "JG-01-02-501",
        first_name: "John",
        middle_name: "Doe",
        surname: "Smith",
        full_name: "John Doe Smith",
        address: "123 Main Street, Dutse, Jigawa State",
        polling_unit: "Dutse Ward 1",
        ward: "Dutse Ward",
        lga: "Dutse"
      }
    }
  },
  // Add the remaining 11 endpoints here with their respective details
]

export default function Documentation() {
  const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0].name)
  const [copiedEndpoint, setCopiedEndpoint] = useState(false)
  const [copiedRequest, setCopiedRequest] = useState(false)
  const [copiedResponse, setCopiedResponse] = useState(false)

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
        <nav className="p-4">
          <h2 className="text-lg font-semibold mb-4">API Endpoints</h2>
          <ul className="space-y-2">
            {endpoints.map((endpoint) => (
              <li key={endpoint.name}>
                <button
                  className={`w-full text-left p-2 rounded ${
                    activeEndpoint === endpoint.name
                      ? 'bg-green-500 text-white'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveEndpoint(endpoint.name)}
                >
                  {endpoint.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <ScrollArea className="h-full">
          {endpoints.map((endpoint) => (
            activeEndpoint === endpoint.name && (
              <div key={endpoint.name} className="space-y-8">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">{endpoint.name} Endpoint</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">{endpoint.description}</p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Endpoint</h2>
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
                  <h2 className="text-2xl font-semibold">Required Permission</h2>
                  <p>{endpoint.permission}</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Request Headers</h2>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <code className="text-sm font-mono">api_key: Your API key (required)</code>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Request Body</h2>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                    {Object.entries(endpoint.requestBody).map(([key, value]) => (
                      <p key={key}><code className="text-sm font-mono">{key}</code> ({value}): The ID of the indigene you want to retrieve information about.</p>
                    ))}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      For testing purposes, use one of the following IDs: JG-01-02-501, JG-01-02-502, JG-01-02-503, or JG-01-02-505
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Response</h2>
                  <p><strong>Response Type:</strong> application/json</p>
                  <div className="space-y-2">
                    <p><strong>Status:</strong> Indicates whether the request was successful or not.</p>
                    <ul className="list-disc list-inside pl-4">
                      <li><code className="text-sm font-mono">success</code>: The request was successfully processed.</li>
                      <li><code className="text-sm font-mono">failed</code>: The request failed due to invalid parameters or lack of permissions.</li>
                    </ul>
                  </div>
                  <p><strong>Message:</strong> A message providing more details about the status of the request.</p>
                  <p><strong>Result:</strong> {`Contains the indigene's information if the request was successful. If the request failed, this will be false.`}</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Result Object</h2>
                  <p>Detailed information about the indigene, including fields like:</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm font-mono">
                      {endpoint.responseFields.join('\n')}
                    </pre>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Examples</h2>
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
                        className="absolute top-2 right-2"
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
                        onClick={() => copyToClipboard(JSON.stringify({
                          status: "failed",
                          message: "Permission denied or invalid API key",
                          result: false
                        }, null, 2), setCopiedResponse)}
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
    </div>
  )
}