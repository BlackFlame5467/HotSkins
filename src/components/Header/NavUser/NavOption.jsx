const CustomOption = ({ innerProps, label, data }) => (
	<div {...innerProps}>
		<img
			src={data.image}
			alt={label}
			style={{ width: "24px", marginRight: "8px" }}
		/>
		{label}
	</div>
)
export default CustomOption