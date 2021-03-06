import { PatchUserDto, UserResponseDto } from "../../../../api/types";

export type UserRedactProps = {
   isModalVisible: boolean;
   handleCancel: () => void;
   handleOk: (payload: PatchUserDto) => void;
   userData: UserResponseDto | null;
};
