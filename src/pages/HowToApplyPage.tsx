import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Send, Download, ClipboardCheck, Mail, Phone, Info, Shield, CreditCard, Clock, GraduationCap } from 'lucide-react';

export default function HowToApplyPage() {
  const registrationSteps = [
    {
      icon: <Download size={32} />,
      title: "Download Form",
      description: "Download the soft copy of the Application Form from our website or request it via WhatsApp or Email."
    },
    {
      icon: <FileText size={32} />,
      title: "Complete Form",
      description: "Complete each segment including Personal Information, Programme Preference, and Employment History."
    },
    {
      icon: <Send size={32} />,
      title: "Submit Soft Copy",
      description: "Scan the completed form and supporting documents and email them to cetcorporategh@gmail.com"
    },
    {
      icon: <Mail size={32} />,
      title: "Admission Notice",
      description: "Your application will be processed and you will receive an official Admission Notification."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Submit Hard Copy",
      description: "Submit the hard copy to the Course Administrator on the reporting day with a passport picture."
    }
  ];

  const packageRequirements = [
    "Completed Application Form, signed by the Applicant/Guardian and Two Referees.",
    "Copy(ies) of Relevant Academic Certificate(s), Results Slip or Transcripts.",
    "Certified English translation of certificates (for non-English speaking countries).",
    "A copy of a Passport Size Picture should be attached on submission."
  ];

  return (
    <main className="pt-32 sm:pt-40">
      {/* Hero Section */}
      <div className="bg-cet-blue py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">How to Apply</h1>
          <p className="text-xl text-slate-300 font-caption font-light leading-relaxed">
            Please note that Application Forms are Free. Follow our structured process to secure your place at CET.
          </p>
        </div>
      </div>

      {/* Registration Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Process</h2>
            <h3 className="text-4xl font-display font-bold text-cet-blue">Steps to Register</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
            {registrationSteps.map((step, index) => (
              <div key={index} className="relative p-8 border border-slate-100 hover:border-cet-orange transition-all group bg-slate-50/50">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cet-blue text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="text-cet-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-cet-blue mb-4">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Break */}
          <div className="grid grid-cols-2 gap-8 py-12">
            <div className="aspect-[21/9] col-span-2 overflow-hidden bg-slate-100">
              <img 
                src="/images/a7-1.jpg" 
                alt="Networking Gala" 
                className="w-full h-full object-cover brightness-110 hover:brightness-125 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Alternative Contact Info */}
          <div className="mt-12 p-8 bg-cet-blue/5 border border-cet-blue/10 rounded-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex items-center gap-4">
                <Info className="text-cet-orange shrink-0" size={24} />
                <p className="text-sm text-slate-600 italic">
                  NB: Hard copies can also be picked up at the Front Desk of Civil Service Training Centre, Cantonments-Accra.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-xs font-bold text-cet-blue">
                  <Phone size={14} className="text-cet-orange" /> 0244644359 (SMS/WhatsApp)
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-cet-blue">
                  <Mail size={14} className="text-cet-orange" /> cetcorporategh@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Package */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Requirements</h2>
              <h3 className="text-4xl font-display font-bold text-cet-blue mb-8">Application Package</h3>
              <p className="text-slate-600 mb-8">The following documents must be included in your application package for successful processing:</p>
              <ul className="space-y-4">
                {packageRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle size={18} className="text-cet-orange shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square relative overflow-hidden boarder-8 border-white shadow-xl">
                 <img 
                   src="/images/a8-1.jpg" 
                   alt="Graduation" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-cet-blue/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Payment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Financial Info</h2>
            <h3 className="text-4xl font-display font-bold text-cet-blue">Tuition Fees & Payment</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 border border-slate-100 bg-slate-50">
              <h4 className="text-xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                <CreditCard className="text-cet-orange" /> Payment Structure
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Upon Admission, students are required to pay at least <strong>60% or more</strong> of the Course Fee before the Commencement of the Programme.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                The balance of the Tuition Fees shall be payable in <strong>two (2) other installments</strong> as indicated by the Payment Plan Policy of the Institute.
              </p>
              <div className="p-4 bg-cet-orange/10 border-l-4 border-cet-orange text-xs text-cet-blue font-bold">
                NB: Deposits made to CET are non-refundable.
              </div>
            </div>
            <div className="p-10 border border-slate-100 bg-slate-50">
              <h4 className="text-xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                <Clock className="text-cet-orange" /> Fee Inclusions
              </h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Included</h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Tuition Fees</li>
                    <li>• Study Notes</li>
                    <li>• Learning Materials</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Excluded</h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Text Books</li>
                    <li>• Graduation Events</li>
                    <li>• Excursions / Trips</li>
                    <li>• Accommodation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Legal Framework</h2>
            <h3 className="text-4xl font-display font-bold text-cet-blue">Terms & Conditions</h3>
          </div>
          <div className="bg-white p-12 border border-slate-200 shadow-sm max-h-[600px] overflow-y-auto space-y-8 text-sm text-slate-600 leading-relaxed custom-scrollbar">
            <div>
              <h4 className="font-display font-bold text-cet-blue text-lg mb-4">1. Application of Terms</h4>
              <p>These Terms and the Offer Letter set out the Contractual Terms which apply between CET and students. Students should ensure they read the Terms and Conditions very carefully before signing.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-cet-blue text-lg mb-4">2. Admission & Acceptance</h4>
              <p>CET accepts or rejects applications in its absolute discretion. To accept an offer, the student must return the Acceptance Form and pay the required deposit as described in the Offer Letter.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-cet-blue text-lg mb-4">3. Academic Criteria & Attendance</h4>
              <p>Successful completion is conditional upon Satisfactory Attendance (attending all classes) and Successful Presentation of a Business Case. Failure to attend classes three (3) consecutive times without permission may result in withdrawal from the course.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-cet-blue text-lg mb-4">4. Deferrals & Overdue Fees</h4>
              <p>A student may defer their course up to a maximum of two occasions due to external events. CET reserves the right to suspend tuition or withhold results if fees are overdue.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-cet-blue text-lg mb-4">5. Equal Opportunities</h4>
              <p>CET operates an Equal Opportunities Admissions Policy, ensuring no applicant receives less favourable treatment on grounds of age, sex, marital status, race, or belief.</p>
            </div>
          </div>

          {/* Consistent Image Gallery */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a11.jpg" 
                alt="Executive Session" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a12.jpg" 
                alt="Professional Development" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a14.jpg" 
                alt="Global Standards" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-8">Ready to start your professional development journey at CET?</p>
            <Link to="/apply" className="inline-flex items-center gap-3 bg-cet-orange text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-cet-blue transition-all">
              Apply Now <GraduationCap size={24} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
