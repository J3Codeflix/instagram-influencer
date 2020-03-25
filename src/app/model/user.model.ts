export interface User {
    position: number,
    user : {
        username: string,
        full_name: string,
        profile_pic_url: string,
        biography: string,
        follower_count: number,
        following_count: number,
        is_private: boolean,
    }
}