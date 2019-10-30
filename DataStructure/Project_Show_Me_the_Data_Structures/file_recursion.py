
import os

def find_files(suffix, path):

    """
    Find all files beneath path with file name suffix.

    Note that a path may contain further subdirectories
    and those subdirectories may also contain further subdirectories.

    There are no limit to the depth of the subdirectories can be.

    Args:
      suffix(str): suffix if the file name to be found
      path(str): path of the file system

    Returns:
       a list of paths
    """
    path_list = []
    file_dir_list = []
    if os.path.isfile(path) and path.endswith(suffix):
    	path_list.append(path)
    	return path_list
    elif os.path.isdir(path):
        file_dir_list = os.listdir(path)
    else:
        return path_list

    for file_dir in file_dir_list:
    	full_path = os.path.join(path, file_dir)
    	subpath_list = find_files(suffix,full_path)

    	path_list += subpath_list
    return path_list

# test case
print(find_files('.gitkeep', 'testdir'))