[
	// Logical Operators
	{trigger: "wed", replacement: "\\wedge", options: "mA"},
	{trigger: "vv", replacement: "\\vee", options: "mA"},
	{trigger: "neg", replacement: "\\neg", options: "mA"},
	
	// Insert space after logical operators
	{trigger: "\\\\(wedge|vee|neg)(.)", replacement: "\\[[0]] [[1]]", options: "rmA"},
	
	// Statistics
	{trigger: "binom", replacement: "\\binom", options: "mA"},
]