export async function authGoogle() {
    try {
        window.open(
            `http://localhost:4000/api/auth/google`,
            "_self"
        );
    } catch (error) {
        console.error(error);
    }
}

export default authGoogle;