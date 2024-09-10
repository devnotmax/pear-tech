"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Qué productos ofrecen?",
      answer: "Ofrecemos una selección exclusiva de iPhones, Macs, y laptops de alta gama.",
    },
    {
      question: "¿Realizan envíos a todo el país?",
      answer: "Sí, realizamos envíos a toda Argentina a través de Correo Argentino.",
    },
    {
      question: "¿Cuánto tiempo tardan en llegar los envíos?",
      answer: "El tiempo de entrega varía entre 3 a 7 días hábiles dependiendo de tu ubicación en Argentina.",
    },
    {
      question: "¿Cuál es el costo de envío?",
      answer: "El costo de envío depende de tu ubicación y se calcula automáticamente durante el proceso de compra.",
    },
    {
      question: "¿Puedo realizar un seguimiento de mi pedido?",
      answer: "Sí, te enviaremos un número de seguimiento para que puedas rastrear tu pedido a través de Correo Argentino.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito, débito, y transferencias bancarias.",
    },
    {
      question: "¿Puedo devolver un producto?",
      answer: "Sí, aceptamos devoluciones dentro de los 10 días hábiles posteriores a la recepción del producto, siempre que esté en su empaque original y en perfectas condiciones.",
    },
  ];

  return (
    <div className="max-w-4xl min-h-screen mx-auto p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#FAFAF9" }}>
      <h2 className="text-3xl font-semibold text-center mb-8" style={{ color: "#1B1818" }}>Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4" style={{ borderColor: "#D9D9D9" }}>
            <button
              className="w-full text-left text-lg font-medium py-3 px-4 rounded-md hover:bg-opacity-80 transition"
              onClick={() => toggleFAQ(index)}
              style={{ backgroundColor: "#2BA84A", color: "#FAFAF9" }}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 px-4 py-2 rounded-md text-sm" style={{ backgroundColor: "#D9D9D9", color: "#1B1818" }}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
