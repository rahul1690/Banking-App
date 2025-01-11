export default function FieldError({touched,errors,fieldName}){
    return <td className="text-start p-0 space-y-0">
    {touched[fieldName] && errors[fieldName] && (
      <p className={"m-0 text-red-500 text-sm pb-4 w-[190px] pl-2"}>{errors[fieldName]}</p>
    )}
  </td>
}