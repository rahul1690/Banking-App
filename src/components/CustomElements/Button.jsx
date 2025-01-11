export default function Button(props){
    const {color, children} = props
    let className = 'px-4 py-2 rounded-md text-white ';
    if(color=='primary') className+='bg-sky-500 '

    return <button className={className} {...props}>
        {children}
    </button>
}