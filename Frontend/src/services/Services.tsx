import axios from "axios";

const BASE_URL = `localhost:5000`;

function header() {
    const auth = JSON.parse(localStorage.getItem(`crypto`) ?? '{}');
    if (auth === '{}') {
        throw new Error ("Empty token!")
    }
    else {
        const header = {
            headers: {
                Authorization : `Bearer ${auth.token}`
            }
        }
        return header;
    }
}

function signin() {

}

function signup() {

}

function deposit() {

}

function withdraw() {
    
}