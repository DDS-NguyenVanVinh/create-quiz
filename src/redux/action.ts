import Employee from "../interface/type"

export const setEmployee = (employee: Array<Employee>) => {
    return {
        type: "setEmployee",
        payload: employee
    }
}