import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);

		// Ensure message is a string
		if (Array.isArray(message)) {
			message = message.join(' ');  // Convert array to string if necessary
		} else if (typeof message !== 'string') {
			message = String(message);  // Convert other types to string
		}

		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || 'Failed to send message');

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message || 'An error occurred while sending the message.');
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};

export default useSendMessage;
