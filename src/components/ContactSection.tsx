import React, { useState } from 'react'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  MessageCircleIcon,
} from 'lucide-react'
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm reaching out from your portfolio website.
*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:*
${formData.message}`
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919099246666?text=${encodedMessage}`, '_blank')
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Open to collaborations, research discussions, and strategic
            partnerships in the domain of financial markets and quantitative
            strategy design
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:sharecomplexllp@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-[#1B5E7E] p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MailIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">
                      sharecomplexllp@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+919099246666"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-[#4CAF50] p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <PhoneIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium">+91 9099246666</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/message/S3NMOOUBT3TWH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#25D366] rounded-lg shadow hover:shadow-lg transition-shadow group text-white"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircleIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">WhatsApp</p>
                    <p className="font-medium">Message me directly</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <MapPinIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800 font-medium">
                      Gandhidham, Gujarat, India
                    </p>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/abhay-bhimajiani-50a223237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#0077B5] rounded-lg shadow hover:shadow-lg transition-shadow group text-white"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <LinkedinIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">LinkedIn Profile</p>
                    <p className="font-medium">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>
            {/* WhatsApp QR Code */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                Scan to Chat on WhatsApp
              </h4>
              <div className="flex justify-center">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/traobJ6hocHsttzc1pGT2W/WhatsApp_Image_2025-11-07_at_6.01.16_PM.jpg"
                  alt="WhatsApp QR Code"
                  className="w-64 h-64 object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Scan this code with your phone to start chatting
              </p>
            </div>
          </div>
          {/* Contact Form - Now sends to WhatsApp */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Send a Message
              </h3>
              <div className="bg-[#25D366] p-2 rounded-lg">
                <MessageCircleIcon size={24} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Fill in your details below and click send to message me directly
              on WhatsApp
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircleIcon size={20} />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2025 Abhay Bhimajiani. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
