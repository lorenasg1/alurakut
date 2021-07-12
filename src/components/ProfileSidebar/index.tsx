import { Box } from '../Box';

interface ProfileSidebarProps {
  githubUser: string;
}

export function ProfileSidebar({ githubUser }: ProfileSidebarProps) {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        alt="foto"
        style={{ borderRadius: '8px' }}
      />
      Lorena Sabino
    </Box>
  );
}
