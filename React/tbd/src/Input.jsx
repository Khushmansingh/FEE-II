function Input({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}

export default Input