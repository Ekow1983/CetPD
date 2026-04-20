export interface FormSubmissionData {
  fullName: string;
  email: string;
  phone?: string;
  programme?: string;
  subject?: string;
  message?: string;
  formType: 'Hero' | 'Application' | 'Contact';
}

export async function submitForm(data: FormSubmissionData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}
