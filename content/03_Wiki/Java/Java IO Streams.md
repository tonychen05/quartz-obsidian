I/O - input / output
input (source) -> output (destination)

# Streams
- [[sequence]] of data element

# Buffers
- buffer - an accumulator
- holds data elements until a process is ready to consume them
	- allows the process to handle batches of data elemetns
	- avoids addressing or waiting for each individual element
- improves performance if process is:
	- most efficient with a certain batch size
	- much faster than the stream delivery rate

> [!NOTE] Empty Buffer - Flush
> *flush* empties the buffer so elements aren't read again or don't need to be read at all

# Bytes and Byte Streams

> [!INFO] Byte
> - byte - 8 bits (0s & 1s)
> 	- historically the number of bits used to encode a single character

> [!INFO] Byte Streams
> Byte streams - input and output of 8-bit bytes

In Java, all byte stream classes descend from InputStreams and OutputStreams

# ---
#java/io