const filterAttr = (attr, search) => {
    if (
        attr.attributes.Nombre.toLocaleLowerCase() ===
        (search || "").toLocaleLowerCase()
    ) {
        return true;
    }