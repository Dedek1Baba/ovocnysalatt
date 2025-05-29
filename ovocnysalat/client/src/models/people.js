const API_BASE_URL = "http://localhost:3000/salad";

export const getAllSalads = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: "Failed to fetch salads" }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            data: data.payload,
            message: data.message,
            status: response.status
        };
    } catch (error) {
        console.error("Error in getAllSalads:", error);
        throw error;
    }
};

export const getSaladById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: `Failed to fetch salad with id ${id}` }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            data: data.payload,
            message: data.message,
            status: response.status
        };
    } catch (error) {
        console.error(`Error in getSaladById for id ${id}:`, error);
        throw error;
    }
};

export const createSalad = async (saladData) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saladData),
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: "Failed to create salad" }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            data: data.payload,
            message: data.message,
            status: response.status
        };
    } catch (error) {
        console.error("Error in createSalad:", error);
        throw error;
    }
};

export const deleteSalad = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: `Failed to delete salad with id ${id}` }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        return {
            message: "Salad deleted successfully",
            status: response.status
        };
    } catch (error) {
        console.error(`Error in deleteSalad for id ${id}:`, error);
        throw error;
    }
};
