export interface SignupInputs {
    name: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    picture: string;
}

export interface LoginInputs {
    email: string;
    password: string;
}

export interface CameraInputProps {
    onCapture: (imageSrc: string | null) => void;
    onClose: () => void;
}

export interface ProfilePhotoEditorProps {
    defaultImageSrc: string;
    alt: string;
    diameter: number;
    onImageChange: (imageSrc: string) => void;
}

export interface SignupFormDataToSend {
    name: string;
    lastName: string;
    email: string;
    password: string;
    picture: string | null;
}
