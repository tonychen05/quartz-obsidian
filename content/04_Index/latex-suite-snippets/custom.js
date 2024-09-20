[
	// Logical Operators
	{trigger: "wed", replacement: "\\wedge", options: "mA"},
	{trigger: "vv", replacement: "\\vee", options: "mA"},
	{trigger: "neg", replacement: "\\neg", options: "mA"},
	
	// Insert space after logical operators
	{trigger: "\\\\(wedge|vee|neg)(.)", replacement: "\\[[0]] [[1]]", options: "rmA"},
	
	// Statistics
	{trigger: "binom", replacement: "\\binom", options: "mA"},
	
	// Discrete Math
	{trigger: "aleph", replacement: "\\aleph", options: "mA"},
	
	// Useful Text
	{trigger: "min", replacement: "\\text{min}", options: "mA"},
]