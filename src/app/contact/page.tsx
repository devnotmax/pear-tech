import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import ContactForm from "@/components/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage: React.FC = () => {
  return (
    <>
    <ToastContainer/>
      <div className="min-h-screen bg-white flex flex-col items-center p-4">
        <div className="w-full max-w-4xl bg-[#f3f4f8] rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 md:p-10">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-black tracking-tighter">
                Contáctanos
              </h1>
              <p className="text-muted-foreground">
                Estamos encantados de poder ayudarte. Por favor, completa el
                siguiente formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CiMail size={20} />
                  <p className="text-sm font-semibold text-gray-700">
                    soporte@pear.tech
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdOutlinePhone size={20} />
                  <p className="text-sm font-semibold text-gray-700">
                    +54 9 11 2345-6789
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <LuMapPin size={20} />
                  <p className="text-sm font-semibold text-gray-700">
                    123 Calle Tecnología, Ciudad Tech, 12345
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
