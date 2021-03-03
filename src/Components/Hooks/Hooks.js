import React from "react"

export function useEditText(value) {
    const [state, setState] = React.useState({
        value: value !== undefined ? value : "",
        backup: value !== undefined ? value : ""
    })
    const [edit, setEdit] = React.useState(false)

    return { state, setState, edit, setEdit }
}
