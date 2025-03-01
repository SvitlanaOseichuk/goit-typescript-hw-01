type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};


type Params = Omit<FormData, 'errors'>;


// type Params = Pick<Form, 'email' | 'firstName' | 'lastName' | 'phone'>;