import { Image, TextInput, View } from "react-native";

import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Block, Typography } from "~/components";

const ChatScreen = () => {
  return (
    <Block flex={1} justifyContent="space-between">
      <Block
        h={80 + 54}
        bg="#F8F9FB"
        px={20}
        borderBottomWidth={1}
        borderBottomColor="#EAEBF0"
        justifyContent="center"
      >
        <Block mt={54} justifyContent="space-between" alignItems="center" row>
          <Block row alignItems="center" gap={12}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/59426856?v=4",
                width: 40,
                height: 40,
              }}
              style={{ borderRadius: 20 }}
            />
            <Block>
              <Typography bodyMedium weight="600" color="#272D37">
                João Amadeu
              </Typography>
              <Typography bodyMedium weight="500" color="#5F6D7E">
                Online
              </Typography>
            </Block>
          </Block>

          <Block row gap={20}>
            <FontAwesome5 name="video" size={18} color="#437EF7" />
            <FontAwesome5 name="phone-alt" size={18} color="#437EF7" />
          </Block>
        </Block>
      </Block>
      <Block flex={1} px={20} justifyContent="flex-end" gap={12} py={16}>
        <Block sentMessage>
          <Typography color={"#fff"} bodyMedium>
            1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            assumenda earum est magnam id. Quo recusandae, culpa{" "}
          </Typography>
          <Typography style={{ textAlign: "right", color: "#B1CCFB" }}>
            10:05 PM
          </Typography>
        </Block>

        <Block receivedMessage>
          <Typography color={"black"} bodyMedium>
            2 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          </Typography>
          <Typography style={{ textAlign: "right", color: "#7C8B9D" }}>
            10:05 PM
          </Typography>
        </Block>
      </Block>

      <Block
        h={90}
        bg="#F8F9FB"
        px={20}
        justifyContent="center"
        borderTopWidth={1}
        borderTopColor="#EAEBF0"
      >
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="emoji-emotions" size={20} color="#5F6D7E" />
          <TextInput
            style={{
              fontWeight: "400",
              fontSize: 16,
              flex: 1,
              height: 52,
            }}
            placeholder="Message..."
            placeholderTextColor="#5F6D7E"
          />
          <Ionicons name="attach" size={24} color="#5F6D7E" />
          <FontAwesome name="microphone" size={24} color="#5F6D7E" />
        </View>
      </Block>
    </Block>
  );
};

export default ChatScreen;
