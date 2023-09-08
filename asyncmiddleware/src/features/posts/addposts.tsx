import React, { useState, ChangeEvent, FormEvent } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

function PostForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto mt-8 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-4 rounded-sm max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-left block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-left block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-left block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default PostForm
