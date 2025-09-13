import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "Digital Menu",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Google Form configuration
  // To set this up:
  // 1. Create a Google Form with fields: Name, Email, Company, Phone, Message, Interest
  // 2. Get the form ID from the URL
  // 3. Get field entry IDs by inspecting the form HTML
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvTfsV9NqfutbeckavD9hq7QoiXQCnDfAGoGpsrKPJlfA1-A/formResponse";
  const FORM_FIELDS = {
    name: "entry.970230518",
    email: "entry.251477606",
    company: "entry.332191801",
    phone: "entry.1156879890",
    message: "entry.1338723573",
    interest: "entry.498486575_sentinel",
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData for Google Form submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(FORM_FIELDS.name, formData.name);
      formDataToSubmit.append(FORM_FIELDS.email, formData.email);
      formDataToSubmit.append(FORM_FIELDS.company, formData.company);
      formDataToSubmit.append(FORM_FIELDS.phone, formData.phone);
      formDataToSubmit.append(FORM_FIELDS.message, formData.message);
      formDataToSubmit.append(FORM_FIELDS.interest, formData.interest);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors", // Required for Google Forms
      });

      // Since we use no-cors, we can't check the response
      // So we assume success if no error is thrown
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "Digital Menu",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">
          Ready to transform your restaurant? Let's discuss how TableTap can
          help your business grow.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
          <span className="text-green-700">
            Thank you! We'll get back to you within 24 hours.
          </span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
          <span className="text-red-700">
            Something went wrong. Please try again or call us directly.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="john@restaurant.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant/Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Bella Vista Restaurant"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="0537211043"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Primary Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          >
            <option value="Digital Menu">Digital Menu System</option>
            <option value="POS System">POS System</option>
            <option value="CMS Platform">CMS Platform</option>
            <option value="Complete Package">Complete TableTap Package</option>
            <option value="Custom Solution">Custom Solution</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your restaurant and how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Or call us directly at{" "}
          <a
            href="tel:0537211043"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            0537211043
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
